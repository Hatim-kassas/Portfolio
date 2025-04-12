import './articles.css';

export default function Articles() {
    const articles = [
        {
          title: "Best Frontend Languages in 2025",
          date: "March 2025",
          content:
            "JavaScript remains dominant with its ecosystem, but TypeScript is gaining traction for large-scale projects. WebAssembly (Wasm) is also emerging as a powerful tool for performance-critical applications. Frameworks like React, Vue, and Svelte continue to evolve, offering developers more flexibility and efficiency. The rise of edge computing and serverless architectures is also influencing frontend development, making it more dynamic and scalable.",
          tags: ["JavaScript", "TypeScript", "Wasm"],
          image: "/img/article-image/Flux_Dev_A_futuristic_hightech_illustration_depicting_a_styliz_3.jpeg",
        },
        {
          title: "AI Development Trends 2025",
          date: "March 2025",
          content:
            "AI-powered development tools are becoming indispensable for developers. Tools like GitHub Copilot and ChatGPT are streamlining coding workflows, while neural networks are being used to optimize performance. AI is also being integrated into testing and debugging, reducing manual effort. The rise of low-code and no-code platforms powered by AI is democratizing software development, enabling non-developers to build applications.",
          tags: ["AI", "Copilot", "Neural"],
          image: "/img/article-image/Flux_Dev_A_futuristic_highcontrast_illustration_depicting_the__0.jpeg",
        },
        {
          title: "The Future of Cloud Computing",
          date: "February 2025",
          content:
            "Cloud computing is evolving with the adoption of multi-cloud and hybrid cloud strategies. Serverless architectures are becoming more popular, offering cost efficiency and scalability. Edge computing is also gaining momentum, enabling faster data processing closer to the source. Security and compliance remain top priorities, with advancements in encryption and zero-trust architectures.",
          tags: ["Cloud", "Serverless", "Edge Computing"],
          image: "/img/article-image/Leonardo_Kino_XL_The_Future_of_Cloud_Computing_thumbnail_artic_3.jpg",
        },
        {
          title: "Blockchain Beyond Cryptocurrency",
          date: "February 2025",
          content:
            "Blockchain technology is being used in industries like healthcare, supply chain, and finance for secure and transparent transactions. Smart contracts are automating processes, reducing the need for intermediaries. Decentralized applications (dApps) are gaining popularity, offering users more control over their data. However, scalability and energy consumption remain challenges for widespread adoption.",
          tags: ["Blockchain", "Smart Contracts", "dApps"],
          image: "https://blogapi.hostmycode.in/static/images/blogs/Blockchain-Beyond-Cryptocurrency-HostMyCode.jpg",
        },
        {
          title: "The Rise of Quantum Computing",
          date: "February 2025",
          content:
            "Quantum computing is no longer a futuristic concept; it's becoming a reality. Companies like IBM and Google are making significant strides in developing quantum processors. This technology has the potential to revolutionize fields like cryptography, drug discovery, and optimization. However, quantum computing is still in its early stages, with many technical challenges to overcome.",
          tags: ["Quantum Computing", "Cryptography", "Optimization"],
          image: "https://miro.medium.com/v2/resize:fit:1200/1*eOrO0LM3nbLY57YVQHYzUg.jpeg",
        },
        {
          title: "Cybersecurity in the Digital Age",
          date: "February 2025",
          content:
            "As technology advances, so do cyber threats. Organizations are adopting zero-trust architectures and AI-driven security solutions to protect their data. Ransomware attacks and phishing scams are on the rise, making user education and awareness critical. Governments are also implementing stricter regulations to ensure data privacy and security.",
          tags: ["Cybersecurity", "Zero-Trust", "AI"],
          image: "https://images.wsj.net/im-904169?width=1280&size=1.896",
        },
        {
          title: "The Evolution of DevOps",
          date: "February 2025",
          content:
            "DevOps practices are evolving with the integration of AI and machine learning. Continuous integration and continuous deployment (CI/CD) pipelines are becoming more automated, reducing human error. Infrastructure as Code (IaC) is gaining traction, enabling teams to manage resources more efficiently. Collaboration between development and operations teams is also improving, leading to faster delivery cycles.",
          tags: ["DevOps", "CI/CD", "IaC"],
          image: "https://covalensedigital.com/storage/posts/July2024/2DPyWAZMgosviY1dM6SF.png",
        },
        {
          title: "The Impact of 5G on Mobile Development",
          date: "January 2025",
          content:
            "The rollout of 5G networks is transforming mobile development. Faster speeds and lower latency are enabling more immersive experiences, such as augmented reality (AR) and virtual reality (VR). Developers are also leveraging 5G to build real-time applications, such as gaming and video streaming. However, optimizing apps for 5G requires careful consideration of performance and battery life.",
          tags: ["5G", "Mobile Development", "AR/VR"],
          image: "https://www.quytech.com/blog/wp-content/uploads/2024/02/role-of-5g-in-mobile-app-development.png",
        },
        {
          title: "The Future of Remote Work",
          date: "January 2025",
          content:
            "Remote work is here to stay, and technology is playing a key role in its evolution. Collaboration tools like Slack and Zoom are becoming more advanced, offering features like AI-powered meeting summaries. Virtual offices and augmented reality workspaces are also being explored. However, challenges like maintaining work-life balance and ensuring cybersecurity remain.",
          tags: ["Remote Work", "Collaboration", "AI"],
          image: "https://shadow.tech/app/uploads/2024/11/shadow-45-1280x569.webp",
        },
        {
          title: "Sustainable Tech: Green Computing",
          date: "December 2024",
          content:
            "As the tech industry grows, so does its environmental impact. Green computing focuses on reducing energy consumption and carbon emissions. Companies are adopting renewable energy sources and optimizing data centers for efficiency. Developers are also being encouraged to write energy-efficient code. Sustainable tech is not just a trend; it's a necessity for the future.",
          tags: ["Green Computing", "Sustainability", "Renewable Energy"],
          image: "https://purelogics.com/wp-content/uploads/2024/12/Green-Comuting.jpg",
        },
      ];

  return (
    <div>
      <main className="main articles-container">
        <h1 className="articles-title">Development Topics</h1>
        
        {articles.map((article, index) => (
          <article key={index} className="article-card">
            <div className="article-image-container">
              <img 
                src={article.image} 
                alt={article.title} 
                className="article-image"
              />
            </div>
            <div className="article-header">
              <h2>{article.title}</h2>
              <span className="article-date">{article.date}</span>
            </div>
            <p className="article-content">{article.content}</p>
            <div className="article-tags">
              {article.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}