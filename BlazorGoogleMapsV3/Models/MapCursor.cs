using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public static class MapCursor
    {
        public static string Auto = "auto";
        public static string AInherit = "inherit";
        public static string Default = "default";
        public static string None = "none";
        public static string Grab = "grab";
        public static string Grabbing = "grabbing";
        public static string ZoomIn = "zoom-in";
        public static string ZoomOut = "zoom-iout";
        public static string Context_Menu = "context-menu";
        public static string Help = "help";
        public static string Pointer = "pointer";
        public static string Progress = "progress";
        public static string Wait = "wait";
        public static string Cell = "cell";
        public static string Crosshair = "crosshair";
        public static string Text = "text";
        public static string Vertical_Text = "vertical-text";
        public static string Alias = "alias";
        public static string Copy = "copy";
        public static string Move = "move";
        public static string No_Drop = "no-drop";
        public static string Not_Allowed = "not-allowed";
        public static string All_Scroll = "all-scroll";
        public static string Col_Resize = "col-resize";
        public static string Row_Resize = "row-resize";
        public static string N_Resize = "n-resize";
        public static string E_Resize = "e-resize";
        public static string EW_Resize = "ew-resize";
        public static string S_Resize = "s-resize";
        public static string W_Resize = "w-resize";
        public static string NS_Resize = "ns-resize";
        public static string NW_Resize = "nw-resize";
        public static string SE_Resize = "se-resize";
        public static string SW_Resize = "sw-resize";
        public static string NE_Resize = "ne-resize";
        public static string NESW_Resize = "nesw-resize";
        public static string NWSE_Resize = "nwse-resize";
        /// <summary>
        /// Replaces the cursor with the custom resource at the URL provided.
        /// These values can also be used directly in a CSS stylesheet, though it is not guaranteed to work on every browser
        /// </summary>
        /// <param name="URL">The URL to the custom cursor resource</param>
        /// <param name="FallBack">The fallback resource to use in the event of a bad or failed URL (Defaults to the default cursor)</param>
        /// <returns>The formatted string to pass to the Map Options</returns>
        public static string Custom(string URL, string FallBack = "default")
        {
            return $"url({URL}, {FallBack})";
        }
    }
}

