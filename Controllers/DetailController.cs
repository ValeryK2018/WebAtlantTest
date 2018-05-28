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
    [Route("api/details")]
    public class DetailController : Controller
    {

        ApplicationContext db;

        public DetailController(ApplicationContext context)
        {
            db = context;
          
        }
        [HttpGet]
        public IEnumerable<Detail> Get()
        {
            if (!db.Details.Any())
            {
                return db.Details.ToList();
            }

            return null;
        }

        [HttpGet("{id}")]
        public Detail Get(int id)
        {
            Detail detail = db.Details.FirstOrDefault(x => x.Id == id);
            return detail;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Detail detail)
        {
            if (ModelState.IsValid)
            {

                db.Details.Add(detail);
                db.SaveChanges();
                return Ok(detail);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Detail detail)
        {
            if (ModelState.IsValid)
            {
                db.Update(detail);
                db.SaveChanges();
                return Ok(detail);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Detail detail = db.Details.FirstOrDefault(x => x.Id == id);
            if (detail != null)
            {
                detail.DeleteDate = DateTime.Now.ToLocalTime(); 
                db.Details.Update(detail);
                db.SaveChanges();
            }
            return Ok(detail);
        }
        
    }
}