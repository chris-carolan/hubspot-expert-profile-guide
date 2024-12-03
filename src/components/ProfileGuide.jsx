import React from 'react';

const ProfileGuide = () => {
  const sections = [
    {
      title: 'Specialized Expertise',
      content: [
        'Customer Platform Strategy Development & Implementation',
        'Digital Transformation Leadership & Team Alignment',
        'HubSpot Knowledge Transfer & Educational Program Design',
        'RevOps Framework Creation & Process Optimization',
        'Community Building & Value Multiplication'
      ],
      callout: 'Lead with clear specialties that help prospects quickly determine fit for their specific needs. This section should appear first to enable efficient decision-making.'
    },
    {
      title: 'Client Impact',
      content: [{
        quote: 'Chris helped us transform our post-sales process in HubSpot, reducing order management complexity while improving customer experience.',
        author: '- Cody Lopez, RevOps Director at Secured Tech Solutions'
      }],
      callout: 'Include brief, specific testimonials that validate expertise and build trust. Focus on measurable outcomes and relevant role titles.'
    },
    {
      title: 'Professional Background',
      content: [
        'HubSpot Transformation Catalyst with 15+ years bridging technical and human understanding.',
        'Former Head of Marketing with multiple full-suite HubSpot implementations.',
        'Creator of PARTNER, CONVEY, and DELIVER frameworks.'
      ],
      callout: 'Keep background concise and focused on relevant experience that supports your expertise claims. Connect past roles to current value.'
    },
    {
      title: 'Daily Value Creation',
      content: [
        'Daily LinkedIn Live shows on HubSpot implementation',
        'Regular deep-dives on customer platform evolution',
        'Active community builder and knowledge sharer',
        '23 current HubSpot certifications'
      ],
      callout: 'Demonstrate ongoing commitment to expertise and growth. Show how you consistently deliver value to the community.'
    },
    {
      title: 'Journey & Vision',
      content: [{
        story: `From my early days managing quality systems in industrial manufacturing to leading digital transformations, I've consistently found myself at the intersection of technical complexity and human understanding. This unique position has given me deep insight into how organizations successfully navigate change.

        What started as a quest to solve specific technical challenges evolved into a broader mission: helping organizations bridge critical knowledge gaps in the digital age. Through implementing HubSpot across multiple organizations, I discovered that sustainable transformation requires more than just technical expertise - it needs systems that enable natural value flow.

        Today, I focus on helping organizations realize HubSpot's full potential as a customer platform. Through daily content creation, strategic consulting, and community building, I work to make complex transformation accessible and actionable for teams at all stages of their journey.

        My approach combines strategic guidance with practical enablement, helping teams develop their capabilities while creating sustainable paths to growth. Whether through frameworks like PARTNER and CONVEY or daily educational content, my goal is to help you not just implement HubSpot, but transform how your organization creates and delivers value.`,
        highlights: [
          'Quality systems to digital transformation',
          'Technical expertise meets human understanding',
          'Focus on sustainable, value-driven change',
          'Daily commitment to community growth'
        ]
      }],
      callout: 'A compelling personal story builds trust and demonstrates expertise through experience. Connect your journey to the value you create for clients today.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <header className="bg-orange-500 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold text-center">HubSpot Expert Profile Guide</h1>
      </header>
      
      <div className="space-y-8 mt-8">
        {sections.map((section, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h2>
              
              <div className="space-y-4">
                {Array.isArray(section.content) ? (
                  section.content.map((item, i) => (
                    typeof item === 'string' ? (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 mr-3"></div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ) : item.quote ? (
                      <blockquote key={i} className="bg-white p-4 rounded-lg">
                        <p className="italic text-gray-700">{item.quote}</p>
                        <p className="mt-2 text-gray-600">{item.author}</p>
                      </blockquote>
                    ) : item.story ? (
                      <div key={i} className="space-y-6">
                        <div className="prose max-w-none">
                          {item.story.split('\n\n').map((paragraph, j) => (
                            <p key={j} className="text-gray-700 leading-relaxed">{paragraph.trim()}</p>
                          ))}
                        </div>
                        <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                          <p className="font-medium text-gray-900 mb-2">Key Highlights:</p>
                          <div className="space-y-2">
                            {item.highlights.map((highlight, k) => (
                              <div key={k} className="flex items-start">
                                <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 mr-3"></div>
                                <p className="text-gray-700">{highlight}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null
                  ))
                ) : (
                  <p className="text-gray-700">{section.content}</p>
                )}
              </div>
            </div>
            
            <div className="absolute -right-4 top-1/2 transform translate-x-full -translate-y-1/2">
              <div className="relative">
                <div className="absolute -left-4 top-1/2 w-4 h-px bg-orange-500"></div>
                <div className="bg-orange-500 text-white p-4 rounded-lg max-w-xs">
                  <p className="text-sm">{section.callout}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-orange-500 text-white p-6 mt-8 rounded-b-lg text-center space-y-2">
        <p>conveyingyourmessage.com</p>
        <p>linkedin.com/in/chris-carolan</p>
      </footer>
    </div>
  );
};

export default ProfileGuide;