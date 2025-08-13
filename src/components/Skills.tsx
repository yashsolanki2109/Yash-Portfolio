'use client'

import { motion } from 'framer-motion'
import {
	Code,
	Palette,
	Database,
	Figma,
	FileCode,
	Globe,
	Monitor,
	Server,
	GitBranch
} from 'lucide-react'

const Skills = () => {
	const skillCategories = [
		{
			title: 'Frontend Technologies',
			skills: [
				{ name: 'HTML5', icon: Code, level: 95, color: 'from-orange-500 to-orange-600' },
				{ name: 'CSS3', icon: Palette, level: 90, color: 'from-blue-500 to-blue-600' },
				{ name: 'JavaScript', icon: FileCode, level: 88, color: 'from-yellow-400 to-yellow-500' },
				{ name: 'React', icon: Globe, level: 85, color: 'from-blue-400 to-blue-500' },
				{ name: 'Next.js', icon: Monitor, level: 80, color: 'from-gray-800 to-gray-900' },
				{ name: 'TypeScript', icon: Code, level: 75, color: 'from-blue-600 to-blue-700' },
			]
		},
		{
			title: 'Styling & Tools',
			skills: [
				{ name: 'Tailwind CSS', icon: Palette, level: 85, color: 'from-cyan-400 to-cyan-500' },
				{ name: 'Node.js', icon: Server, level: 70, color: 'from-green-500 to-green-600' },
				{ name: 'Git', icon: GitBranch, level: 80, color: 'from-orange-600 to-orange-700' },
				{ name: 'Figma', icon: Figma, level: 75, color: 'from-purple-500 to-purple-600' },
				{ name: 'VS Code', icon: FileCode, level: 90, color: 'from-blue-500 to-blue-600' },
				{ name: 'Databases', icon: Database, level: 65, color: 'from-indigo-500 to-indigo-600' },
			]
		}
	]

	return (
		<section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
			<div className="container-custom">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">
						My <span className="text-gradient">Skills</span>
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						A comprehensive overview of the technologies and tools I use to bring ideas to life.
					</p>
				</motion.div>

				<div className="space-y-16">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
							viewport={{ once: true }}
						>
							<h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">
								{category.title}
							</h3>
							
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
										viewport={{ once: true }}
										className="card p-6 hover:shadow-lg transition-all duration-300"
									>
										<div className="flex items-center mb-4">
											<div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mr-3`}>
												<skill.icon className="w-6 h-6 text-white" />
											</div>
											<div>
												<h4 className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h4>
												<span className="text-sm text-gray-500 dark:text-gray-300">{skill.level}%</span>
											</div>
										</div>
										
										<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
											<motion.div
												className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
												initial={{ width: 0 }}
												whileInView={{ width: `${skill.level}%` }}
												transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
												viewport={{ once: true }}
											/>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
						<h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
							Always Learning
						</h3>
						<p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
							Technology evolves rapidly, and I&apos;m committed to staying current with the latest 
							trends and best practices in frontend development.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							{['Web3', 'Three.js', 'GraphQL', 'Testing', 'CI/CD', 'Performance'].map((tech, index) => (
								<motion.span
									key={tech}
									className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
									viewport={{ once: true }}
								>
									{tech}
								</motion.span>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Skills
