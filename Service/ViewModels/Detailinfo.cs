using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebTestAtlant.ViewModels
{
    public class Detailinfo
    {
        public int Id { get; set; } //PK
        public string NomenclatureCode { get; set; } //Номенклатурный код
        public string Name { get; set; } //Наименование
        public int? Quantity { get; set; } //Количество
        public string NameStockman { get; set; } //Наименование
        public DateTime CreateDate { get; set; } //Дата создания
        public DateTime? DeleteDate { get; set; } //Дата удаления
        
        public Detailinfo(int Id, string NomenclatureCode, string Name, int? Quantity, string NameStockman, DateTime CreateDate, DateTime? DeleteDate)
        {

            this.Id = Id;
            this.NomenclatureCode = NomenclatureCode;
            this.Name = Name;
            this.Quantity = Quantity;
            this.NameStockman = NameStockman;
            this.CreateDate = CreateDate;
            this.DeleteDate = DeleteDate;
        }

       
    }
}
