using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int ID { get; set; }
        public int Quantity { get; set; }

        //Nav props
        public int ProductID { get; set; }
        public Product Product { get; set; }
    }
}