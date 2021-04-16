const Sphere = class Sphere {
  #name;
  #image;

  constructor(name, image) {
    this.#name = name;
    this.#image = image;
  }

  get name() {
    return this.#name;
  }

  get image() {
    return this.#image;
  }

  withName(name) {
    this.#name = name;
    return this;
  }

  withImage(image) {
    this.#image = image;
    return this;
  }

  static with({ name, image }) {
    return new Sphere(name, image);
  }

  static withName(name) {
    return new Sphere().withName(name);
  }

  static withImage(image) {
    return new Sphere().withImage(image);
  }
};

export const demoSpheres = [
  Sphere.with({ name: "Jazz", image: "/jazz.png" }),
  Sphere.with({ name: "Fishy", image: "/fishy.jpg" }),
  Sphere.with({ name: "Fireplace", image: "/fireplace.svg" }),
];

export default Sphere;
export { Sphere };
