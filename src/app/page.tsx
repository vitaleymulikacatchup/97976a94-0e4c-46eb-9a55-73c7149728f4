"use client"

import { Leaf, Settings, Star, Package, MessageCircle, Users, Truck, Scissors, Crown } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureCardTwo from "@/components/sections/feature/FeatureCardTwo";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Plants", id: "product" },
            { name: "Services", id: "feature" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Green Haven Nursery"
          button={{
            text: "Shop Now",
            href: "product"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Space with Beautiful Plants"
          description="Discover our extensive collection of healthy, vibrant plants and expert gardening services to create your perfect green sanctuary."
          tag="Premium Plant Nursery"
          tagIcon={Leaf}
          buttons={[
            { text: "Browse Plants", href: "product" },
            { text: "Our Services", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/5738525/pexels-photo-5738525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Beautiful plant nursery with lush greenery"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Growing Excellence Since 1985"
          description={[
            "With over three decades of expertise, Green Haven Nursery has been the trusted source for quality plants, expert advice, and professional gardening services.",
            "From rare specimens to common favorites, we nurture every plant with care and provide personalized guidance to help your garden flourish."
          ]}
          buttons={[
            { text: "Learn More", href: "feature" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Our Expert Services"
          description="From consultation to maintenance, we provide comprehensive gardening solutions for every need."
          tag="Services"
          tagIcon={Settings}
          features={[
            {
              title: "Expert Consultation",
              description: "Get personalized advice from our certified horticulturists to plan and design your perfect garden space.",
              icon: Users,
              button: { text: "Book Now", href: "contact" }
            },
            {
              title: "Plant Delivery",
              description: "Professional delivery and installation service ensuring your plants arrive healthy and properly placed.",
              icon: Truck,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Garden Maintenance",
              description: "Regular care and maintenance services to keep your garden healthy and beautiful year-round.",
              icon: Scissors,
              button: { text: "Schedule", href: "contact" }
            }
          ]}
          layout="default"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Plants"
          description="Explore our carefully curated selection of healthy, beautiful plants perfect for any space."
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Monstera Deliciosa",
              price: "$45.99",
              imageSrc: "https://images.pexels.com/photos/667309/pexels-photo-667309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Monstera Deliciosa tropical plant"
            },
            {
              id: "2",
              name: "Succulent Garden Set",
              price: "$29.99",
              imageSrc: "https://images.pexels.com/photos/92038/pexels-photo-92038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Collection of succulent plants"
            },
            {
              id: "3",
              name: "Flowering Azalea",
              price: "$68.99",
              imageSrc: "https://images.pexels.com/photos/1026233/pexels-photo-1026233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beautiful flowering azalea shrub"
            }
          ]}
          buttons={[
            { text: "View All Plants", href: "#" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Garden Care Packages"
          description="Choose the perfect maintenance plan to keep your garden thriving throughout the seasons."
          tag="Service Plans"
          tagIcon={Package}
          plans={[
            {
              id: "basic",
              badge: "Perfect Start",
              badgeIcon: Leaf,
              price: "$89/month",
              subtitle: "Ideal for small gardens and beginners",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Monthly garden health check",
                "Basic pruning and trimming",
                "Seasonal plant recommendations",
                "Email support"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$189/month",
              subtitle: "Complete care for established gardens",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Schedule Call", href: "#" }
              ],
              features: [
                "Bi-weekly professional maintenance",
                "Advanced pruning and shaping",
                "Fertilization and pest control",
                "Seasonal plant rotation",
                "Priority phone support"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Read testimonials from satisfied customers who have transformed their spaces with our plants and services."
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Homeowner",
              testimonial: "Green Haven Nursery transformed my backyard into a beautiful oasis. Their expert advice and quality plants exceeded all my expectations.",
              imageSrc: "https://images.pexels.com/photos/34475040/pexels-photo-34475040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Landscape Designer",
              testimonial: "As a professional, I rely on Green Haven for healthy specimens and reliable service. Their plant quality is consistently outstanding.",
              imageSrc: "https://images.pexels.com/photos/261841/pexels-photo-261841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Garden Enthusiast",
              testimonial: "The maintenance service has kept my garden looking perfect year-round. I couldn't be happier with their professional care.",
              imageSrc: "https://images.pexels.com/photos/7728711/pexels-photo-7728711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Johnson",
              role: "Business Owner",
              testimonial: "They created a stunning entrance garden for our office. The consultation process was thorough and the results were amazing.",
              imageSrc: "https://images.pexels.com/photos/7782296/pexels-photo-7782296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Johnson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch with Our Plant Experts"
          description="Ready to transform your space? Contact us for personalized advice, service quotes, or any gardening questions you may have."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your garden project or ask any questions...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Green Haven Nursery"
          columns={[
            {
              items: [
                { label: "Indoor Plants", href: "product" },
                { label: "Outdoor Plants", href: "product" },
                { label: "Garden Supplies", href: "product" }
              ]
            },
            {
              items: [
                { label: "Consultation", href: "feature" },
                { label: "Delivery", href: "feature" },
                { label: "Maintenance", href: "feature" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Testimonials", href: "testimonial" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}