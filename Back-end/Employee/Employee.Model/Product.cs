using Employee.Shared.Common;
using Employee.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Model;

public class Product : BaseAuditableEntity, IEntity
{
    public int Id { get; set; }

    public string? Name { get; set; }
    public string? Description { get; set; }
    public double rating { get; set; }
    public int price { get; set; }
    public string? Barcode { get; set; }
    public int SellPrice { get; set; }
    public int? CountryId { get; set; }
    public Country? Country { get; set; }

}
