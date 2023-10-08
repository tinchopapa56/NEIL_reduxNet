using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerID { get; set; }
        public List<BasketItem> Items { get; set; } = new(); // new List<BasketItem>();

        public void AddItem(Product product, int quantity)
        {
            //No esta en la lista
            if(Items.All(item => item.ProductID != product.Id))
            {
                Items.Add(
                    new BasketItem
                    {
                        Product = product,
                        Quantity = quantity
                    }
                );
            }

            var existingItem = Items.FirstOrDefault(item => item.ProductID == product.Id);
            if(existingItem != null) existingItem.Quantity += quantity;

        }

        public void RemoveItem(int ProductID, int quantity)
        {
            var item = Items.FirstOrDefault(item => item.ProductID == ProductID);
            
            if(item == null) return;
            item.Quantity -= quantity;

            if(item.Quantity == 0) Items.Remove(item);
        }
    }
}