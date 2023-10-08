using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController : BaseApiCustomController
    {
        private readonly StoreContext _context;
        public BasketController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasketDto()
        {
            Basket basket = await RetrieveBasket();

            if (basket == null) return NotFound();

            return MapBasketToDto(basket);
        }

        [HttpPost] //api/basket?productId=3&quantity=2
        public async Task<ActionResult<BasketDto>> AddItemToBasket(int productID, int quantity)
        {
            var basket = await RetrieveBasket();
            if(basket == null) basket = CreateBasket();

            var productToAdd = await _context.Products.FindAsync(productID);
            if(productToAdd == null) return BadRequest(new ProblemDetails { Title = "Product not found" });

            basket.AddItem(productToAdd, quantity);

            var res = await _context.SaveChangesAsync() > 0;

            // if(res) return Ok();}
            if(res) return CreatedAtRoute("GetBasket", MapBasketToDto(basket));

            return BadRequest(new ProblemDetails{Title = "Problem saving item to basket"});
        }

        [HttpDelete]
        public async Task<ActionResult> DeletedBasketItem(int productID, int quantity)
        {
            //get
            var basket = await RetrieveBasket();
            if(basket == null) return NotFound();

            basket.RemoveItem(productID, quantity);
            var res = await _context.SaveChangesAsync() > 0;

            if(res) return Ok();
            return BadRequest(new ProblemDetails{Title = "Problem deleting the item from basket"});
        }
        private async Task<Basket> RetrieveBasket()
        {
            return await _context.Baskets
                .Include(b => b.Items)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(b => b.BuyerID == Request.Cookies["BuyerID"]);
        }
        private Basket CreateBasket()
        {
            var buyerID = Guid.NewGuid().ToString();
            var cookieOpts = new CookieOptions{IsEssential = true, Expires = DateTime.Now.AddDays(30)};
            Response.Cookies.Append("BuyerID", buyerID, cookieOpts);

            var basket = new Basket{BuyerID = buyerID};
            _context.Baskets.Add(basket);

            return basket;
        }
        private static ActionResult<BasketDto> MapBasketToDto(Basket basket)
        {
            return new BasketDto
            {
                Id = basket.ID,
                BuyerID = basket.BuyerID,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductID,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    ImgUrl = item.Product.PictureUrl,
                    Type = item.Product.Type,
                    Brand = item.Product.Brand,
                    Quantity = item.Quantity
                }).ToList()
            };
        }
    }
}