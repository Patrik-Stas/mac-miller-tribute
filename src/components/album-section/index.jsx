import React, { Component } from 'react';
import {
  Grid, Table, TableBody, TableRow, TableCell,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './album-section.css';

class AlbumSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderSongList = (songs, album, year, onSongClick) => (
      <Table className="very selectable basic table" style={{ border: 0 }}>
        <TableBody>
          {songs.map(song => (
            <TableRow key={song.song_name}>
              <TableCell
                onClick={() => onSongClick(song.watchid, album, song.song_name, year)
                }
              >
                {song.song_name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  render() {
    const {
      songList,
      sectionImg,
      songsOnLeft,
      album,
      year,
      handleSongClick,
    } = this.props;
    const imageGrid = (
      <Grid.Column width={6}>
        <h2>{album}</h2>
        <h3>{year}</h3>
        {this.renderSongList(songList, album, year, handleSongClick)}
      </Grid.Column>
    );
    const songGrid = (
      <Grid.Column width={6}>
        <img src={sectionImg} className="albumbackground" alt="mac_logo" />
      </Grid.Column>
    );

    const gridContent = songsOnLeft
      ? [imageGrid, songGrid]
      : [songGrid, imageGrid];

    return (
      <Grid>
        <Grid.Row>{gridContent}</Grid.Row>
      </Grid>
    );
  }
}

AlbumSection.propTypes = {
  songList: PropTypes.arrayOf(PropTypes.object),
  sectionImg: PropTypes.string,
  album: PropTypes.string,
  year: PropTypes.number,
  songsOnLeft: PropTypes.bool,
  handleSongClick: PropTypes.func,
};

export default AlbumSection;
