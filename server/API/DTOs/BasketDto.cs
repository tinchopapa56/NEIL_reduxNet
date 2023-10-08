using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public record BasketDto
    {
        public int Id { get; set; }
        public string BuyerID { get; set; }
        public List<BasketItemDto> Items { get; set; }
    }

    
}