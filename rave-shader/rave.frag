// Rave Shader >:D

// Color
vec3 palette(float t) {
    vec3 a = vec3(0.25, 0.45, 1.25);
    vec3 b = vec3(0.35, 1.50, 0.25);
    vec3 c = vec3(0.50, 0.45, 1.00);
    vec3 d = vec3(0.25, 0.45, 1.25);

    return a + b*cos( 6.283185*(c*t+d) );
}
// Shader
void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;

    float d = length(uv);
    vec3 col = palette(iTime);

    d = sin(d*8. + iTime)/8.;
    d = abs(d);
    d = 0.01/d;
    col *= d;

    fragColor = vec4(col, 1.0);
}
