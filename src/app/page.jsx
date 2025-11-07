import Header from '@/components/Header'
import Home from '@/components/Home'
import Skills from '@/components/Skills'
import GitHubStats from '@/components/GitHubStats'
import FeaturedRepos from '@/components/FeaturedRepos'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import FloatButtons from '@/components/FloatButtons'

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Home />
      <Skills />
      <GitHubStats />
      <FeaturedRepos />
      <Projects />
      <Blog />
      <FloatButtons />
    </div>
  )
}
