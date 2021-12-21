export default function contarOvejas(ovejas) {
  return ovejas.filter((o) => {
    return (
      o.color === "rojo" &&
      o.name.toLowerCase().includes("a") &&
      o.name.toLowerCase().includes("n")
    );
  });
};
