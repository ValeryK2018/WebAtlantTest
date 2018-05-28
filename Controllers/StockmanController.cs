using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebTestAtlant.Models;

namespace WebTestAtlant.Controllers
{
    [Produces("application/json")]
    [Route("api/stockmans")]
    public class StockmanController : Controller
    {

        ApplicationContext db;
        public StockmanController(ApplicationContext context)
        {
            db = context;
          
        }

        [HttpGet]
        public IEnumerable<Stockman> Get()
        {
            if (db.Stockmans.Any())
            {
                return db.Stockmans.ToList();
            }
            else
                return null;
           
        }

        [HttpGet("{id}")]
        public Stockman Get(int id)
        {
            Stockman stockman = db.Stockmans.FirstOrDefault(x => x.Id == id);
            return stockman;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Stockman stockman)
        {
            if (ModelState.IsValid)
            {
                db.Stockmans.Add(stockman);
                db.SaveChanges();
                return Ok(stockman);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Stockman stockman)
        {
            if (ModelState.IsValid)
            {
                db.Update(stockman);
                db.SaveChanges();
                return Ok(stockman);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Stockman stockman = db.Stockmans.FirstOrDefault(x => x.Id == id);
            
            if (stockman != null)
            {
                Detail detail = db.Details.Where(p => p.Quantity > 0).FirstOrDefault(x => x.StockmanId == stockman.Id);

                if (detail != null)
                {
                   return BadRequest("Нельзя удалить кладовщика, за которым числятся детали");
                }
                else
                {
                    db.Stockmans.Remove(stockman);
                    db.SaveChanges();
                }
                               
            }
            return Ok(stockman);
        }
   }
}