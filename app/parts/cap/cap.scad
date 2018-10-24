use <HC-SR04.scad>;

module cap_shape() {
  base_height = 10;
  cylinder(h=base_height, d=50.08);
  translate([0, 0, base_height-2])
    cylinder(d=65, h=10);

}

module wiring_space() {
  translate([0, 0, 18])
    cube(size = [24, 55,10], center=true);

  translate([0, 28.5, 0])
    cube([10, 5, 50], center=true);
}


module cap() {
  difference() {
    cap_shape();
    translate([0, 0, 13]) rotate([180, 0, 0]) {
      HCSR04();
    }
    wiring_space();
  }
}

cap();

/*HCSR04();*/
