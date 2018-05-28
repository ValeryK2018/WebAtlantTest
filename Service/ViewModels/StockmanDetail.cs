using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebTestAtlant.ViewModels
{
    public class StockmanDetail
    {
        public string FIO { get; set; } //ФИО
        public int? SummkolDetail { get; set; } //Количество деталей

        public StockmanDetail(string FIO, int? SummkolDetail)
        {
            this.FIO = FIO;
            this.SummkolDetail = SummkolDetail;
        }
    }
}
