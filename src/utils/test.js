const constructorInitialState = {
  bun: null,
  ingredients: [],
};

/////////////////////////////////////////////

const [constructorItems, constructorDispatch] = useContext(
  BurgerConstructorContext
);
...
return (
  <>
  {constructorItems.bun && (
    <ConstructorElement
      type="top"
      isLocked={true}
    ...
    />
    )}
  <ul ...>
  {constructorItems.ingredients.map((item, index) => {
    return (
      <ConstructorElement
              ...
    handleClose={() =>
    constructorDispatch({
      type: "DELETE",
      payload: index,
    })
  }
    />
  );
  })}
  </ul>
{constructorItems.bun && (
  <ConstructorElement
    type="bottom"
    isLocked={true}
          ...
  />
)}
</>
);

