using System.Web;
using System.Web.Mvc;

namespace HPE_RPS_TheGame
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
