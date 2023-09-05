using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // [ApiControlls: ControllerBase
    
    public class ProductsController : BaseApiCustomController
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly StoreContext _storeContext;

        public ProductsController(StoreContext context, ILogger<ProductsController> logger)
        {
            _logger = logger;
            _storeContext = context;
        }

        [HttpGet()]
        public async Task<ActionResult<List<Product>>> GetAllProducts()
        {
            var products = await _storeContext.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            var product = await _storeContext.Products.Where(p => p.Id == id).FirstOrDefaultAsync();

            if(product == null) return NotFound();

            return Ok(product);
        }
    }
}