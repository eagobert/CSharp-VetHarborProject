using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VETHarbor.Models
{
    public class ApplicationRole: IdentityRole<Guid>
    {
        public ApplicationRole()
        {
        }

    }
}
