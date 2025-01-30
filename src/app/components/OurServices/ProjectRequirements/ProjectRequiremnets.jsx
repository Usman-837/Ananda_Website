'use client'
import React from 'react'
import Image from 'next/image'
import stylebyananda from '../../../../../public/OurServices/ProjectRequirements/stylebyananda.png'
import jewelrybyananda from '../../../../../public/OurServices/ProjectRequirements/jewelrybyananda.png'
import weddingdress from '../../../../../public/OurServices/ProjectRequirements/weddingdress.png'
import eventplanning from '../../../../../public/OurServices/ProjectRequirements/eventplanning.png'
import photography from '../../../../../public/OurServices/ProjectRequirements/photography.png'
import cakedesign from '../../../../../public/OurServices/ProjectRequirements/cakedesign.png'
import venueselection from '../../../../../public/OurServices/ProjectRequirements/venueselection.png'
import decoration from '../../../../../public/OurServices/ProjectRequirements/decoration.png'
import catering from '../../../../../public/OurServices/ProjectRequirements/catering.png'
import entertainment from '../../../../../public/OurServices/ProjectRequirements/entertainment.png'
import stylebyanandaprojectrequire from '../../../../../public/OurServices/ProjectRequirements/stylebyanandaprojectrequire.png'
import jewelrybyanandprojectrequire from '../../../../../public/OurServices/ProjectRequirements/jewelrybyanandprojectrequire.png'
import weddingdressprojectrequire from '../../../../../public/OurServices/ProjectRequirements/weddingdressprojectrequire.png'
import eventplanningprojectrequire from '../../../../../public/OurServices/ProjectRequirements/eventplanningprojectrequire.png'
import photographyprojectrequire from '../../../../../public/OurServices/ProjectRequirements/photographyprojectrequire.png'
import cakedesignprojectrequire from '../../../../../public/OurServices/ProjectRequirements/cakedesignprojectrequire.png'
import venueselectionprojectrequire from '../../../../../public/OurServices/ProjectRequirements/venueselectionprojectrequire.png'
import decorationprojectrequire from '../../../../../public/OurServices/ProjectRequirements/decorationprojectrequire.png'
import cateringprojectrequire from '../../../../../public/OurServices/ProjectRequirements/cateringprojectrequire.png'
import entertainmentprojectrequire from '../../../../../public/OurServices/ProjectRequirements/entertainmentprojectrequire.png'
import researchimg from '../../../../../public/OurServices/ProjectRequirements/research.png'
import ideaimg from '../../../../../public/OurServices/ProjectRequirements/idea.png'
import eventimg from '../../../../../public/OurServices/ProjectRequirements/eventmanager.png'

const ProjectRequiremnets = ({ id }) => {

    const RequirementsData = [
        {
            id: 1,
            des1: 'Style by Ananda offers premium wedding styling services, ensuring a flawless and elegant look for brides, grooms, and wedding parties. The project requires expert wardrobe selection, personalized fittings, and coordination with designers for custom attire.',
            des2: 'Services include hair, makeup, and accessory curation to match the wedding theme. Attention to detail, high-quality products, and professional execution are essential. The final look must align with the couple’s vision, enhancing their special day with sophistication and grace.',
            serviceimage: stylebyananda,
            projectimage: stylebyanandaprojectrequire,
        },
        {
            id: 2,
            des1: 'Jewelry by Ananda provides exquisite, handcrafted wedding jewelry, ensuring elegance and sophistication for brides, grooms, and wedding parties. The project requires custom jewelry design, high-quality materials such as gold, diamonds, and gemstones, and expert craftsmanship.',
            des2: 'Services include personalized consultations, fittings, and coordination with wedding attire for a seamless look. Attention to detail, timeless aesthetics, and exceptional quality are essential. The final pieces must complement the couple’s vision, enhancing their special day with luxury and elegance.',
            serviceimage: jewelrybyananda,
            projectimage: jewelrybyanandprojectrequire,
        },
        {
            id: 3,
            des1: 'The Wedding Dress Service provides elegant and customized bridal gowns, ensuring a perfect fit and timeless beauty. The project requires expert consultation, high-quality fabrics, intricate embroidery, and personalized fittings.',
            des2: 'Services include custom dress design, alterations, and coordination with wedding themes for a cohesive look. Attention to detail, craftsmanship, and luxurious aesthetics are essential. The final dress must reflect the bride’s vision, enhancing her confidence and elegance on her special day with sophistication and style.',
            serviceimage: weddingdress,
            projectimage: weddingdressprojectrequire,
        },
        {
            id: 4,
            des1: 'The Event Planning Service ensures a seamless, stress-free wedding experience by managing all logistics, design, and coordination. The project requires venue selection, vendor management, budget planning, and timeline scheduling.',
            des2: 'Services include theme development, décor arrangement, guest management, and on-site coordination. Attention to detail, problem-solving, and personalized execution are essential. The final event must reflect the couple’s vision, creating a memorable and elegant celebration with flawless organization, ensuring a joyful and unforgettable wedding day.',
            serviceimage: eventplanning,
            projectimage: eventplanningprojectrequire,
        },
        {
            id: 5,
            des1: 'The Photography Service captures timeless and emotional moments of the wedding day with professionalism and creativity. The project requires high-quality cameras, expert photographers, and advanced editing techniques.',
            des2: 'Services include pre-wedding shoots, candid and posed photography, videography, and post-production editing. Attention to detail, lighting, and storytelling are essential. The final images must reflect the couple’s love story, preserving their special moments with elegance, artistry, and precision, ensuring a lasting memory of their wedding day.',
            serviceimage: photography,
            projectimage: photographyprojectrequire,
        },
        {
            id: 6,
            des1: 'The Cake Design Service creates exquisite and customized wedding cakes that reflect the couple’s theme and preferences. The project requires high-quality ingredients, expert craftsmanship, and creative design techniques.',
            des2: 'Services include personalized cake consultations, custom flavors, intricate decorations, and flawless execution. Attention to detail, aesthetic appeal, and taste perfection are essential. The final cake must be visually stunning, delicious, and elegantly presented, adding a memorable and delightful touch to the couple’s wedding celebration.',
            serviceimage: cakedesign,
            projectimage: cakedesignprojectrequire,
        },
        {
            id: 7,
            des1: 'The Venue Selection Service ensures the perfect setting for a dream wedding, aligning with the couple’s vision and needs. The project requires research on location options, budget considerations, guest capacity, and logistical convenience.',
            des2: 'Services include site visits, contract negotiations, décor adaptability, and vendor coordination. Attention to ambiance, accessibility, and amenities is essential. The final venue must provide a stunning backdrop, seamless functionality, and a memorable atmosphere, creating the ideal foundation for an unforgettable wedding celebration.',
            serviceimage: venueselection,
            projectimage: venueselectionprojectrequire,
        },
        {
            id: 8,
            des1: 'The Venue Decoration Service transforms wedding spaces into breathtaking settings that reflect the couple’s theme and vision. The project requires creative design, high-quality décor elements, floral arrangements, lighting, and furniture selection.',
            des2: 'Services include concept development, color coordination, stage and table setup, and on-site execution. Attention to detail, aesthetics, and ambiance is essential. The final décor must create a magical and elegant atmosphere, enhancing the beauty of the venue and leaving a lasting impression on guests.',
            serviceimage: decoration,
            projectimage: decorationprojectrequire,
        },
        {
            id: 9,
            des1: 'The Venue Catering Service provides a premium dining experience tailored to the couple’s wedding theme and guest preferences. The project requires expert menu planning, high-quality ingredients, professional chefs, and seamless food presentation.',
            des2: 'Services include customized meal options, buffet or plated service, beverage selection, and dietary accommodations. Attention to taste, presentation, and service efficiency is essential. The final catering experience must delight guests with exquisite flavors, elegant presentation, and impeccable service, creating a memorable wedding celebration.',
            serviceimage: catering,
            projectimage: cateringprojectrequire,
        },
        {
            id: 10,
            des1: 'The Venue Entertainment Service creates a lively and engaging atmosphere for a memorable wedding celebration. The project requires professional DJs, live bands, performers, and state-of-the-art sound and lighting systems.',
            des2: 'Services include music selection, dance floor setup, interactive performances, and customized entertainment experiences. Attention to crowd engagement, seamless coordination, and technical excellence is essential. The final entertainment setup must enhance the wedding’s ambiance, ensuring an unforgettable experience filled with joy, energy, and lasting memories for guests.',
            serviceimage: entertainment,
            projectimage: entertainmentprojectrequire,
        },
    ];

    const WorkprocessData1 = [
        {
            id: 1,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 2,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 3,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 4,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 5,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 6,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 7,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 8,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 9,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 10,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
    ];

    const ServiceSolution1 = [
        {
            id: 1,
            ServiceSolution2: [
                { id: 1, des: 'Seamless coordination and meticulous execution, ensuring every detail reflects your dreams.' },
                { id: 2, des: 'Indulge in a culinary journey with customized menus curated by world-class chefs.' },
                { id: 3, des: 'Live music, performers, and immersive experiences to elevate your event atmosphere.' },
                { id: 4, des: 'Tailored wedding concepts with a touch of timeless romance and grandeur.' }
            ]
        },
        {
            id: 2,
            ServiceSolution2: [
                { id: 1, des: 'Create a one-of-a-kind masterpiece with our expert artisans, designed to reflect your unique style.' },
                { id: 2, des: 'Revitalize your cherished pieces or transform old treasures into modern, breathtaking designs.' },
                { id: 3, des: 'From dazzling engagement rings to heirloom-worthy wedding bands, we offer timeless pieces for your special day.' },
                { id: 4, des: 'Make every occasion unforgettable with exquisite jewelry, customized to add a personal touch.' }
            ]
        },
        {
            id: 3,
            ServiceSolution2: [
                { id: 1, des: 'Tailor-made wedding dresses crafted to reflect your unique style and personality.' },
                { id: 2, des: 'Handpicked dresses from renowned designers, blending sophistication with contemporary trends.' },
                { id: 3, des: 'Expert fitting services to ensure flawless elegance and comfort.' },
                { id: 4, des: 'Exquisite gowns for bridesmaids, flower girls, and mother-of-the-bride ensembles.' }
            ]
        },
        {
            id: 4,
            ServiceSolution2: [
                { id: 1, des: 'From concept to execution, we handle everything—venue selection, vendor coordination, and timeline management' },
                { id: 2, des: 'We bring your vision to life with exquisite themes and personalized details that reflect your style and personality.' },
                { id: 3, des: 'Exclusive venues, bespoke experiences, and VIP services for those who seek the extraordinary.' },
                { id: 4, des: 'From live performances to lighting and sound design, we craft immersive experiences that leave a lasting impression' }
            ]
        },
        {
            id: 5,
            ServiceSolution2: [
                { id: 1, des: 'From heartfelt vows to grand receptions, we preserve your most cherished moments with stunning imagery.' },
                { id: 2, des: 'Relive your event with beautifully edited films, capturing every emotion and detail.' },
                { id: 3, des: 'Professional photography that highlights key moments, branding, and the essence of your event.' },
                { id: 4, des: 'Natural, elegant, and timeless portraits that showcase the true essence of your celebration.' }
            ]
        },
        {
            id: 6,
            ServiceSolution2: [
                { id: 1, des: 'From timeless classics to intricate modern designs, we craft cakes tailored to your vision.' },
                { id: 2, des: 'Exquisite multi-tiered masterpieces adorned with handcrafted details, florals, and elegant finishes.' },
                { id: 3, des: 'Hand-painted details, sugar sculptures, and unique textures to match your theme perfectly.' },
                { id: 4, des: 'Complete your event with a beautifully curated dessert spread, including cupcakes, macarons, and gourmet pastries.' }
            ]
        },
        {
            id: 7,
            ServiceSolution2: [
                { id: 1, des: 'We identify and secure the ideal venue based on your preferences, guest count, and ambiance requirements.' },
                { id: 2, des: 'Transform any space into a stunning setting with bespoke décor, lighting, and layout planning.' },
                { id: 3, des: 'We ensure smooth guest access, parking, and accommodation arrangements for a stress-free experience.' },
                { id: 4, des: 'From catering and AV setup to legal permits, we handle all technicalities to make your event flawless.' }
            ]
        },
        {
            id: 8,
            ServiceSolution2: [
                { id: 1, des: 'Personalized themes and décor concepts, ensuring every element aligns with your vision and event aesthetic.' },
                { id: 2, des: 'Elegant tablescapes, premium linens, and custom furniture arrangements to create a stylish and welcoming space.' },
                { id: 3, des: 'Stunning backdrops, artistic stage setups, and statement pieces that elevate the visual appeal of your event.' },
                { id: 4, des: 'Grand entrances, aisle décor, and venue enhancements that leave a lasting first impression.' }
            ]
        },
        {
            id: 9,
            ServiceSolution2: [
                { id: 1, des: 'Curated by top chefs, our diverse menu offers a blend of international cuisines and local delicacies, tailored to your taste.' },
                { id: 2, des: 'From luxurious wedding cakes to artisanal desserts, we create stunning sweet treats to complement your event.' },
                { id: 3, des: 'Expertly crafted cocktails, fine wines, and non-alcoholic specialties served with elegance.' },
                { id: 4, des: 'Interactive food stations, buffets, plated dinners, and butler-style service for a seamless dining experience.' }
            ]
        },
        {
            id: 10,
            ServiceSolution2: [
                { id: 1, des: 'From soulful jazz to high-energy pop, our professional musicians set the perfect mood.' },
                { id: 2, des: 'Elegant ballroom, cultural performances, or electrifying modern dance—customized for your event.' },
                { id: 3, des: 'Magicians, acrobats, fire performers, and theatrical productions to mesmerize your audience.' },
                { id: 4, des: 'Curated playlists, high-quality sound, and seamless music transitions to keep the party alive.' }
            ]
        },
    ];

    const selectedData = RequirementsData.find((item) => item.id === Number(id));
    const selectedWorkProcess = WorkprocessData1.find((item) => item.id === Number(id))
    const selectedServiceSolution = ServiceSolution1.find((item) => item.id === Number(id))

    return (
        <div className='pt-28 max-sm:pt-16'>
            {selectedData && (
                <div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Image src={selectedData.serviceimage} alt='serviceimage' />
                    </div>
                    <div className='flex flex-col gap-y-10 pt-24 max-sm:pt-12' data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='Jost text-SlateBlack leading-thirtysix text-3xl max-sm:text-2xl max-sm:text-center font-medium'>Project Requirement</h1>
                        <div className='Jost text-base text-DustyGrayBlue space-y-5 leading-7 max-sm:text-center'>
                            <p>{selectedData.des1}</p>
                            <p>{selectedData.des2}</p>
                        </div>
                        <div>
                            <Image src={selectedData.projectimage} alt='projectimage' />
                        </div>
                    </div>
                </div>
            )}
            {selectedWorkProcess && (
                <div className='pt-14' data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='Jost text-SlateBlack leading-thirtysix text-3xl max-sm:text-2xl font-medium max-sm:text-center'>Our Work Process</h1>
                    <div className='grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-4 pt-10'>
                        {selectedWorkProcess.WorkprocessData2.map((data) => (
                            <div key={data.id} className='border border-[#EBEBEB] p-6 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                                <Image src={data.icon} alt={data.title} />
                                <h2 className='Jost text-SlateBlack leading-twentyfour text-xl font-semibold'>{data.title}</h2>
                                <p className='Jost text-fifteen text-DustyGrayBlue leading-twentyseven'> {data.des}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedServiceSolution && (
                <div className='pt-12 max-sm:pt-6' data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='Jost text-SlateBlack leading-thirtysix text-3xl max-sm:text-2xl font-medium max-sm:text-center py-6'>Service Solution</h1>
                    {selectedServiceSolution.ServiceSolution2.map((data) => (
                        <div key={data.id} className='flex flex-col gap-y-5 text-DustyGrayBlue text-fifteen my-5'>
                            <div className='bg-[#FFFFFF] py-5 px-3'>{data.des}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProjectRequiremnets;
