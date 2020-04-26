uniform sampler2D texture1;
varying vec2 vUv;

uniform vec3 colorA;
uniform vec3 colorB;

void main() {

  // sample from the texture based on the uv coordinates
  vec2 vUv = mod(vUv, 0.5);
  gl_FragColor = texture2D(texture1, vUv*2.0);

}
