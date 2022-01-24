using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public static class MapCollisionBehavior
    {
        public const string OptionalHidesLowerPriority = "OPTIONAL_AND_HIDES_LOWER_PRIORITY";
        public const string Required = "REQUIRED";
        public const string OptionalHidesOptional = "REQUIRED_AND_HIDES_OPTIONAL";
    }
}
