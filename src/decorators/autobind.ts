namespace App {
   export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFr = originalMethod.bind(this);
        return boundFr;
      },
    };
    return adjDescriptor;
  }
}
