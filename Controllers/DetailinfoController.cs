using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebTestAtlant.Models;
using WebTestAtlant.ViewModels;

namespace WebTestAtlant.Controllers
{
    [Produces("application/json")]
    [Route("api/detailinfo")]
    public class DetailinfoController : Controller
    {
        ApplicationContext db;
        List<Detailinfo> listDetailinfo;

        public DetailinfoController(ApplicationContext context)
        {
            db = context;
            listDetailinfo = new List<Detailinfo>();
        }
        
        [HttpGet]
        public IEnumerable<Detailinfo> Get()
        {
            if(db.Details.Any())
            {
                SelectSpisockWithName();
                return listDetailinfo;
            }

            return null;
           
        }

         private void SelectSpisockWithName()
        {
            var spisokDetail = (from p1 in db.Stockmans
                                join p2 in db.Details on p1.Id equals p2.StockmanId
                                select new
                                {
                                    a1 = p2.Id,
                                    a2 = p2.NomenclatureCode,
                                    a3 = p2.Name,
                                    a4 = p2.Quantity,
                                    a5 = p1.FIO.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)[1],
                                    a6 = p2.CreateDate,
                                    a7 = p2.DeleteDate
                                });

            foreach (var item in spisokDetail)
            {

                listDetailinfo.Add(new Detailinfo(item.a1, item.a2, item.a3, item.a4, item.a5, item.a6, item.a7));
            }
        }

    }
}