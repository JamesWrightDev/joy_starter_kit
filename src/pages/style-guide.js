import React from "react"
import Layout from "../components/layout"
import Column from "../components/Layout/Column";
import ColumnContainer from '../components/Layout/ColumnContainer';
import ImageBlock from '../components/ImageBlock/ImageBlock';

const StyleGuide = () => (
  <Layout>

    <h1 className="h1">Style Guide</h1>
    {/* <Link to="/">Go back to the homepage</Link> */}

    <h2>Layout</h2>
    <h4>One Column</h4>
    <ColumnContainer>
    <Column>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam quo corrupti perspiciatis itaque molestiae magnam labore? Numquam corrupti alias temporibus blanditiis beatae voluptatibus consequatur nesciunt dolor deserunt incidunt? Sequi.</p>
      </Column>
    </ColumnContainer>
    <h4>Two Column</h4>
    <ColumnContainer>
    <Column>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam quo corrupti perspiciatis itaque molestiae magnam labore? Numquam corrupti alias temporibus blanditiis beatae voluptatibus consequatur nesciunt dolor deserunt incidunt? Sequi.</p>
      </Column>
      <Column>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam quo corrupti perspiciatis itaque molestiae magnam labore? Numquam corrupti alias temporibus blanditiis beatae voluptatibus consequatur nesciunt dolor deserunt incidunt? Sequi.</p>
      </Column>
    </ColumnContainer>
    <h4>Three Columns</h4>
    <ColumnContainer>
      <Column>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam quo corrupti perspiciatis itaque molestiae magnam labore? Numquam corrupti alias temporibus blanditiis beatae voluptatibus consequatur nesciunt dolor deserunt incidunt? Sequi.</p>
      </Column>
      <Column>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam quo corrupti perspiciatis itaque molestiae magnam labore? Numquam corrupti alias temporibus blanditiis beatae voluptatibus consequatur nesciunt dolor deserunt incidunt? Sequi.</p>
      </Column>
      <Column>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam quo corrupti perspiciatis itaque molestiae magnam labore? Numquam corrupti alias temporibus blanditiis beatae voluptatibus consequatur nesciunt dolor deserunt incidunt? Sequi.</p>
      </Column>
    </ColumnContainer>
    <hr/>
    {/* Typography */}
    <h2>Typography</h2>
    <h1>Level One Heading</h1>
    <h2>Level Two Heading</h2>
    <h3>Level Three Heading</h3>
    <h4>Level Four Heading</h4>
    <h5>Level Five Heading</h5>
    <h6>Level Six Heading</h6>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci
      quam aliquid. Quaerat sint facere assumenda, voluptate quasi, ut modi aut
      inventore vero architecto ducimus nam unde. Nisi, perspiciatis at?
    </p>
  <hr/>
  <h2>Images</h2>
  <ColumnContainer>
     <Column>
      <ImageBlock/>
     </Column>
  </ColumnContainer>
  <ColumnContainer>
     <Column>
      <ImageBlock/>
     </Column>
     <Column>
      <ImageBlock/>
     </Column>
  </ColumnContainer>
    <ColumnContainer>
      <Column>
        <ImageBlock/>
      </Column>
      <Column>
        <ImageBlock/>
      </Column>
      <Column>
        <ImageBlock/>
      </Column>
    </ColumnContainer>
    <ColumnContainer>
      <Column>
        <ImageBlock/>
      </Column>
      <Column>
        <ImageBlock/>
      </Column>
      <Column>
        <ImageBlock/>
      </Column>
    </ColumnContainer>
  </Layout>
)

export default StyleGuide
