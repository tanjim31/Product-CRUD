using Employee.Model;
using Employee.Shared.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Infrastructure.Persistence.Configurations;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.HasKey(e => e.Id);
        builder.HasOne(x => x.Country).WithMany(x => x.Product).HasForeignKey(x => x.CountryId);


        builder.HasData(new
        {
            Id = 1,
            Name = "Bike",
            Description = "R15V3",
            rating = 4.5,
            price = 550000,
            Barcode = "xyz",
            SellPrice = 610000,
            CountryId = 1,
            Created = DateTimeOffset.Now,
            CreatedBy = "1",
            LastModified = DateTimeOffset.Now,
            Status = EntityStatus.Created
        });
    }
}
