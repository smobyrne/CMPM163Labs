varying vec3 vUv;
varying vec3 count;

uniform vec3 colorA;
uniform vec3 colorB;
uniform vec3 colorC;

void main() {


  if(gl_FragCoord.z < .98){
    gl_FragColor = vec4(mix(colorA, colorB, vUv.y), 1.0);
  } else {
    gl_FragColor = vec4(mix(colorA, colorC, vUv.x), 1.0);
  }
}
