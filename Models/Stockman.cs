using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebTestAtlant.Models
{
    public class Stockman
    {
        public int Id { get; set; } //PK
        [Required]
        public string FIO { get; set; } //ФИО
    }
}
