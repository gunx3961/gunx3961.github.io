import React from 'react';
import dynamic from 'next/dynamic';
import Page from '../layouts/Page';

class Post extends React.Component {
  static async getInitialProps({ query }) {
    return {
      postName: query.postName,
      catName: query.catName,
    };
  }

  // componentDidMount() {
  //   const { catName, postName } = this.props;

  //   Doc = dynamic(() => import(`../archives/${catName}/${postName}/${postName}.md`));
  //   console.log(Doc);
  // }

  render() {
    const { catName, postName } = this.props;

    const Doc = dynamic(() => import(`../blog-archives/posts/${catName}/${postName}/${postName}.md`));

    return (
      <Page>
        <h1>{this.props.postName}</h1>
        <h3>> {this.props.catName}</h3>
        <section>
          <p>post content here</p>
          <Doc />
        </section>
      </Page>
    );
  }
}

export default Post;
