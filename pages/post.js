import React from 'react';

class Post extends React.Component {
  static async getInitialProps({ query }) {
    return {
      postName: query.postName,
      catName: query.catName,
    };
  }

  render() {
    return (
      <>
        <h1>{this.props.postName}</h1>
        <h3>> {this.props.catName}</h3>
        <section>
          <p>post content here</p>
        </section>
      </>
    );
  }
}

export default Post;
