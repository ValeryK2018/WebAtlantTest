using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebTestAtlant.Models
{
    public class Detail
    {
        public int Id { get; set; } //PK
        [Required]
        public string NomenclatureCode { get; set; } //Номенклатурный код
        [Required]
        public string Name { get; set; } //Наименование
        public int? Quantity { get; set; } //Количество
        [Required]
        public DateTime CreateDate { get; set; } //Дата создания
        public DateTime? DeleteDate { get; set; } //Дата удаления

        public int StockmanId { get; set; } //FK
        public Stockman Stockman { get; set; } //FK

    }
}
