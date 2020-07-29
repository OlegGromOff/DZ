import React from "react";

export default function hoc(Component) { // оборачиваю компонент в hoc
  return class HOC extends React.Component {
    render() {
      return (
        // добавляю компоненту свои данные
        <>
          <Component title="FavoriteList" path="/favorite" {...this.props} />
        </>
      );
    }
  }

}