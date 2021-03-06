//---------------------------------------------------------------
//-- Openscad HC-SR04 module
//-- (C) Juan Pedro L�pez (jotape)
//-- May-2013
//---------------------------------------------------------------
//-- Released under the GPL license
//---------------------------------------------------------------

//------------------------------------------------------------------
//-- Draw an HC-SR04 sensor module
//------------------------------------------------------------------

module HCSR04() {
  // Draw the sensors
  translate(v = [-13.5, 0, 7.5]) {
    cylinder(h = 13.8, r = 10, center = true, $fn=36);
  }

  translate(v = [13.5, 0, 7.5]) {
    cylinder(h = 13.8, r = 10, center = true, $fn=36);
  }

  translate([0, 0, -4.3])
    cube(size = [47.5,24,10], center = true);
}

