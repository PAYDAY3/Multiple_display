
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredAds, setFilteredAds] = useState([
    {
      image: "/placeholder.svg",
      title: "软件工程师",
      description: "寻求具有丰富JavaScript技能的有经验软件工程师。",
      type: "工程",
      salary: "80,000 - 120,000",
      requirements: {
        experience: "3年以上",
        education: "计算机科学或相关领域的学士学位",
        skills: ["JavaScript", "React", "Node.js"],
      },
      companyWebsite: "https://www.acme.com",
      isEditable: true,
    },
    {
      image: "/placeholder.svg",
      title: "营销协调员",
      description: "加入我们充满活力的营销团队,助力业务增长。",
      type: "营销",
      salary: "45,000 - 55,000",
      requirements: {
        experience: "1-2年",
        education: "营销或传播学士学位",
        skills: ["社交媒体", "内容创作", "电子邮件营销"],
      },
      companyWebsite: "https://www.example.com",
      isEditable: true,
    },
    {
      image: "/placeholder.svg",
      title: "平面设计师",
      description: "寻求一位才华横溢的平面设计师,创造出视觉震撼的设计。",
      type: "设计",
      salary: "55,000 - 70,000",
      requirements: {
        experience: "2-4年",
        education: "平面设计或相关领域的学士学位",
        skills: ["Adobe创意套件", "排版", "品牌设计"],
      },
      companyWebsite: "https://www.design.com",
      isEditable: true,
    },
    {
      image: "/placeholder.svg",
      title: "产品经理",
      description: "寻求一位出色的产品经理,推动产品创新与发展。",
      type: "产品",
      salary: "70,000 - 100,000",
      requirements: {
        experience: "3-5年",
        education: "工商管理或相关领域的学士学位",
        skills: ["用户研究", "产品策略", "项目管理"],
      },
      companyWebsite: "https://www.product.com",
      isEditable: false,
    },
    {
      image: "/placeholder.svg",
      title: "数据分析师",
      description: "寻求一位精通数据分析的专业人士,为业务提供数据支持。",
      type: "数据",
      salary: "60,000 - 80,000",
      requirements: {
        experience: "2-4年",
        education: "统计学或相关领域的学士学位",
        skills: ["SQL", "Python", "Power BI"],
      },
      companyWebsite: "https://www.data.com",
      isEditable: false,
    },
    {
      image: "/placeholder.svg",
      title: "内容编辑",
      description: "寻求一位出色的内容编辑,为我们的网站创作优质内容。",
      type: "内容",
      salary: "45,000 - 55,000",
      requirements: {
        experience: "1-3年",
        education: "新闻传播或相关领域的学士学位",
        skills: ["写作", "编辑", "SEO"],
      },
      companyWebsite: "https://www.content.com",
      isEditable: true,
    },
    {
      image: "/placeholder.svg",
      title: "项目经理",
      description: "寻求一位富有经验的项目经理,带领团队高效交付项目。",
      type: "项目",
      salary: "70,000 - 90,000",
      requirements: {
        experience: "4-6年",
        education: "工程管理或相关领域的学士学位",
        skills: ["项目管理", "沟通协调", "风险管理"],
      },
      companyWebsite: "https://www.project.com",
      isEditable: false,
    },
    {
      image: "/placeholder.svg",
      title: "市场营销专员",
      description: "寻求一位热情洋溢的市场营销专员,推动产品销售。",
      type: "营销",
      salary: "40,000 - 50,000",
      requirements: {
        experience: "1-2年",
        education: "营销或相关领域的学士学位",
        skills: ["活动策划", "广告投放", "数据分析"],
      },
      companyWebsite: "https://www.marketing.com",
      isEditable: true,
    },
    {
      image: "/placeholder.svg",
      title: "用户体验设计师",
      description: "寻求一位出色的用户体验设计师,打造优秀的产品交互体验。",
      type: "设计",
      salary: "60,000 - 80,000",
      requirements: {
        experience: "2-4年",
        education: "交互设计或相关领域的学士学位",
        skills: ["Figma", "用户研究", "交互设计"],
      },
      companyWebsite: "https://www.ux.com",
      isEditable: true,
    },
    {
      image: "/placeholder.svg",
      title: "数据科学家",
      description: "寻求一位精通数据科学的专业人士,为业务提供数据驱动的洞见。",
      type: "数据",
      salary: "80,000 - 100,000",
      requirements: {
        experience: "3-5年",
        education: "统计学或相关领域的硕士学位",
        skills: ["Python", "R", "机器学习"],
      },
      companyWebsite: "https://www.data-science.com",
      isEditable: false,
    },
    {
      image: "/placeholder.svg",
      title: "内容策略师",
      description: "寻求一位出色的内容策略师,制定并执行内容营销计划。",
      type: "内容",
      salary: "50,000 - 70,000",
      requirements: {
        experience: "2-4年",
        education: "新媒体或相关领域的学士学位",
        skills: ["内容策划", "内容创作", "内容分析"],
      },
      companyWebsite: "https://www.content-strategy.com",
      isEditable: true,
    },
  ])
  const [currentPage, setCurrentPage] = useState(1)
  const adsPerPage = 10
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setFilteredAds(filteredAds.filter((ad) => ad.type.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  const handleFilterByType = (type) => {
    setSearchTerm(type)
    setFilteredAds(filteredAds.filter((ad) => ad.type.toLowerCase() === type.toLowerCase()))
  }
  const indexOfLastAd = currentPage * adsPerPage
  const indexOfFirstAd = indexOfLastAd - adsPerPage
  const currentAds = filteredAds.slice(indexOfFirstAd, indexOfLastAd)
  const totalPages = Math.ceil(filteredAds.length / adsPerPage)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="mb-8 md:mb-10 lg:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">探索我们的精选信息</h2>
        <div className="mt-4 flex justify-center">
          <Input
            type="search"
            placeholder="按工作类型搜索..."
            value={searchTerm}
            onChange={handleSearch}
            className="max-w-md w-full"
          />
        </div>
        <div className="mt-4 flex justify-center gap-2">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm"
            onClick={() => handleFilterByType("\u8BA1\u7B97\u673A\u8F6F\u4EF6")}
          >
            计算机软件
          </Button>
          <Button variant="outline" className="px-4 py-2 text-sm">
            电子商务
          </Button>
          <Button variant="outline" className="px-4 py-2 text-sm">
            金融
          </Button>
          <Button variant="outline" className="px-4 py-2 text-sm">
            医疗保健
          </Button>
          <Button variant="outline" className="px-4 py-2 text-sm">
            教育
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10">
        {currentAds.map((ad, index) => (
          <div
            key={index}
            className="bg-background rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt={ad.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{ad.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{ad.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-primary font-semibold">{ad.salary}</div>
                <div className="text-muted-foreground text-sm">
                  {ad.requirements.experience} | {ad.requirements.education}
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <Link href="#" className="hover:underline" prefetch={false}>
                  {new URL(ad.companyWebsite).hostname}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  isActive={pageNumber === currentPage}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
