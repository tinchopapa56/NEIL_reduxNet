using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class BasketItem
    {
        public int ID { get; set; }
        public int Quantity { get; set; }

        //Nav props
        public int ProductID { get; set; }
        public Product Product { get; set; }
        // public int BasketID { get; set; }
    }
}