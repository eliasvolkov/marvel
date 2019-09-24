import * as React from "react";
import { connect } from "react-redux";
import {
  fetchCharactersRequest,
  fetchCharactersByPageRequest
} from "../actions";
import { IResults } from "../../../shared/models/response";
import { Character } from "./Character";
import { Pagination } from "./Pagination";

export interface ICharacterContainerProps {
  fetchCharactersRequest: () => void;
  fetchCharactersByPageRequest: (page: number) => void;
  characters: IResults[];
  totalCharacters: IResults[];
}
export interface ICharacterContainerState {
  currentPage: number;
}

class CharacterContainer extends React.Component<
  ICharacterContainerProps,
  ICharacterContainerState
> {
  state = {
    currentPage: 1
  };
  componentDidMount() {
    this.props.fetchCharactersByPageRequest(1);
    this.props.fetchCharactersRequest();
  }

  nextPage = (page: number) => {
    this.props.fetchCharactersByPageRequest(page);
    this.setState({ currentPage: page });
  };

  public render() {
    const numberOfPages = Math.floor(this.props.totalCharacters.length / 10);
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
        <Pagination
          pages={numberOfPages}
          currentPage={this.state.currentPage}
          nextPage={this.nextPage}
        />
      </div>
    );
  }
}

const mapState2Props = (state: any) => {
  return {
    totalCharacters: state.fetchCharacters.data,
    characters: state.fetchCharactersByPage.data
  };
};

export default connect(
  mapState2Props,
  { fetchCharactersRequest, fetchCharactersByPageRequest }
)(CharacterContainer);
