import * as React from "react";
import { connect } from "react-redux";
import { fetchCharactersRequest } from "../actions";
import { IResults } from "../../../shared/models/response";
import { Character } from "./Character";
import { IState } from "../model";

export interface ICharacterContainerProps {
  fetchCharactersRequest: () => void;
  characters: IResults[];
}

class CharacterContainer extends React.Component<any> {
  componentDidMount() {
    this.props.fetchCharactersRequest();
  }
  public render() {
    return (
      <div>
        <div className="row ">
          {this.props.characters.map((character: IResults) => {
            return (
              <Character
                key={character.id}
                name={character.name}
                description={character.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState2Props = (state: any) => {
  return {
    characters: state.fetchCharacters.data
  };
};

export default connect(
  mapState2Props,
  { fetchCharactersRequest }
)(CharacterContainer);
