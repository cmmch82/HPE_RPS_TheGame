using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HPE_RPS_TheGame.Startup))]
namespace HPE_RPS_TheGame
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
