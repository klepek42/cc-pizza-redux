import { useSelector } from "react-redux";

const PizzaList = () => {
  // @ts-ignore
  const pizza = useSelector((state) => state.pizza);

  return (
    <div>
      {pizza.map((item: any) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default PizzaList;
