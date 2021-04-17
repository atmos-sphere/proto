const Sphere = class Sphere {
  constructor(name, image) {
    this._name = name;
    this._image = image;
  }

  get name() {
    return this._name;
  }

  get image() {
    return this._image;
  }

  withName(name) {
    this._name = name;
    return this;
  }

  withImage(image) {
    this._image = image;
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
  Sphere.with({ name: "JAZZ", image: "/jazz.png" }),
  Sphere.with({ name: "FISHY", image: "/fishy.jpg" }),
  Sphere.with({ name: "FIREPLACE", image: "/fireplace.svg" }),
];

export const sphereImages = [
  {
    name: 'Jazz',
    image: '/jazz.png'
  },
  {
    name: 'Fishy',
    image: '/fishy.jpg'
  },
  {
    name: 'Fireplace',
    image: '/fireplace.svg'
  },
  {
    name: 'Vercel',
    image: '/vercel.svg'
  },
  {
    name: "Axe",
    image: '/axe.svg'
  }
];

export default Sphere;
// export { spheres };
