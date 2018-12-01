import React, { Component } from 'react';
import { Grid, Table, TableBody, TableRow, TableCell } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function renderSongList(songs) {
  return (
    <Table className="very selectable basic table" style={{ border: 0 }}>
      <TableBody>
        {songs.map(song => (
          <TableRow key={song.song}>
            <TableCell onClick={() => window.open(song.ut, '_blank')}>
              {song.song}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

class AlbumSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { songList, sectionImg, songsOnLeft, title } = this.props;
    const imageGrid = (
      <Grid.Column width={6}>
        <h2>{title}</h2>
        {renderSongList(songList)}
      </Grid.Column>
    );
    const songGrid = (
      <Grid.Column width={6}>
        <img src={sectionImg} alt="mac_logo" />
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
  title: PropTypes.string,
  songsOnLeft: PropTypes.bool,
};

export default AlbumSection;
