export function say(name) {
  if (!name) {
    throw new Error(
      `You inputted: ${name}`,
    );
  }

  return `This is my name: ${name}`;
}
