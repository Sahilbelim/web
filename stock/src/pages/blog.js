import React, { Component } from 'react'
import Navbar from './nav'
import Card from './card';

export default class Blog extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <div className="row">
            <Card
              img="https://stockanalysis.com/api/assets/cms/b473dd78-8627-4d36-b62d-42612ea3f60c/people-making-tiktok.png"
              title="How to Invest in ByteDance (TikTok) Stock in 2023"
              content="ByteDance is the parent company of the social media app, TikTok. While ByteDance is still a private company, here's how you can invest before it goes public."
            />
            <Card
              img="https://stockanalysis.com/api/assets/cms/27064bb2-d4fc-4c6e-997b-2a2f620a76a6/computer-contract-and-model-building.png"
              title="The 7 Best Real Estate Crowdfunding Platforms in 2023"
              content="Thanks to crowdfunding, now everyone can invest in real estate. Here are the 7 best real estate crowdfunding websites and apps."
            />
            <Card
              img="https://stockanalysis.com/api/assets/cms/7ebb58ee-9a54-4e58-8540-31d7e12d7a28/robot-dog-on-table.png"
              title="Can You Invest in Boston Dynamics Stock?"
              content="Boston Dynamics is at the cutting edge of robotics tech. Even though it's not publicly traded, here's how you can invest in Boston Dynamics today."
            />
            <Card
              img="https://stockanalysis.com/api/assets/cms/0096857a-ff6d-4aab-9620-e6e0e327631a/options-trading-course-concept.png"
              title="The 7 Best Options Trading Courses"
              content="Options trading has complexities and risks. Here are the 7 best options courses to save you time, money, and frustration as you learn."
            />
            <Card
              img="https://stockanalysis.com/api/assets/cms/870bc828-186a-4c77-baf6-15c958f77896/robots-and-humans.jpg"
              title="How to Invest in OpenAI (ChatGPT) Stock in 2023"
              content="OpenAI is the maker of the popular AI chatbot ChatGPT. Here's how to invest in OpenAI before its IPO, while it's still a private company."
            />
            <Card
              img="https://stockanalysis.com/api/assets/cms/c99689f7-d870-4e1d-895d-3ba084b1f468/man-at-trading-desk-image.png"
              title="The Best Day Trading Computer Setup (Hardware & Software)"
              content="Day traders need good equipment. Here’s the hardware, software, and other tools you need to make the job faster, easier, and more profitable."
            />
            <Card
              img="https://stockanalysis.com/api/assets/cms/555d7951-7acf-4abc-a34e-0cf4951aa262/abstract-brain-illustrations.png"
              title="Can You Invest in Neuralink Stock Before Its IPO?"
              content="Neuralink is a private neurotechnology company co-founded by Elon Musk. Here's what to know about investing in Neuralink's stock in 2023."
            />
            <Card
              img="https://stockanalysis.com/api/assets/cms/00adccbe-cf58-4cac-ac7a-ba658745cd1d/fine-art-gallery.png"
              title="The 11 Best Alternative Investment Platforms in 2023"
              content="Private market investments are becoming components of many modern portfolios. Here are the 11 best platforms for investing in alternative assets like art, real estate, and others."
            />
            <Card
              img="https://stockanalysis.com/api/assets/cms/e5f32007-504f-4ddc-8ce2-e0887937ebb5/graphic-design-work-in-progress.png"
              title="How to Buy Canva Stock Before Its IPO"
              content="Canva is an online design platform that provides user-friendly design tools. Even though it's still a private company, here's how you can invest in Canva today."
            />
          </div>
        </div>
      </>
    );
  }
}
