import { FaAws, FaDocker, FaGithub, FaLinkedin, FaPython, FaReact, FaMicrosoft } from 'react-icons/fa';
import { SiGooglecloud, SiKubernetes, SiTerraform } from 'react-icons/si';

export const resumeData = {
  name: "ALI AKBAR",
  role: "DevOps Engineer",
  contact: {
    phone: "+923326048232",
    email: "aliakbaryt01@gmail.com",
    location: "Lahore, PK",
    social: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ali-akbar-dev/", icon: FaLinkedin },
      { name: "GitHub", url: "https://github.com/AliAkbar986", icon: FaGithub },
      { name: "Portfolio", url: "https://aliakbar986.github.io/", icon: FaReact }, // Using React icon as placeholder for portfolio
    ],
  },
  summary: "Results-driven DevOps Engineer with 5 years of experience building scalable, secure, and cloud-native systems across AWS, Azure, and GCP. Proficient in infrastructure as code (IaC), CI/CD automation, Kubernetes, and GitOps workflows. Proven track record in cloud migration, compliance automation, and cross-cloud infrastructure deployments. Passionate about driving velocity, reliability, and cost-efficiency using DevSecOps and SRE principles.",
  skills: {
    aws: ["EKS", "Fargate", "EC2", "RDS", "Lambda", "VPC", "IAM", "ECS", "CloudWatch", "DynamoDB", "API Gateway", "S3", "CloudFront", "Route53", "Amplify"],
    azure: ["AKS", "VM", "Site Recovery", "MySQL", "Data Factory", "App Logics", "DNS", "Vnet", "Azure Functions"],
    gcp: ["GKE", "CloudRun", "GCE", "Artifact Registry", "Compute", "Monitoring", "SCC"],
    devops: ["Kubernetes", "Terraform", "Terragrunt", "Ansible", "Jenkins", "ArgoCD", "Helm", "Docker", "CloudFormation", "Git", "GitHub Actions", "GitLabCI", "Grafana", "Prometheus"],
    languages: ["Python", "Bash", "C++"],
    security: ["AWS Security Hub", "Inspector", "Detective", "CloudTrail", "WAF", "Azure Security Center", "Google Cloud SCC", "OPA"],
  },
  experience: [
    {
      role: "DevOps Engineer",
      company: "VITALSTEER",
      location: "LAHORE",
      period: "April 2024 – Present",
      description: [
        "Developed and deployed 10+ Python and Java microservices via GitLab CI/CD to AWS ECS, implementing centralized compliance and security policies to improve audit readiness and reduce manual governance overhead by 40%.",
        "Designed and deployed 15+ AWS Lambda functions for scheduled automation, integrating with API Gateway, DynamoDB, Step Functions, and AWS Fargate—automating workflows and reducing manual intervention by 60%.",
        "Managed Kubernetes infrastructure using Terraform and Terragrunt with ArgoCD, configuring components like Istio, HPAs, StatefulSets, and Karpenter, improving deployment reliability and enabling auto-scaling across 3 environments.",
        "Created end-to-end CI/CD pipelines for Django applications deployed to Azure and dedicated servers, reducing deployment time by 50% and enabling reliable weekly releases.",
        "Migrated legacy monolithic PHP and mobile applications to Azure, utilizing Azure Site Recovery and Load Balancer to enhance disaster recovery and achieve 99.9% high availability.",
        "Deployed and configured Kurento Media Server on Azure VMs and VPS, integrating ICE, STUN, and TURN protocols to enable real-time communication features for PHP and Python-based applications."
      ]
    },
    {
      role: "AWS DevOps Engineer",
      company: "QUADACTS",
      location: "GUJRANWALA",
      period: "April 2023 – March 2024",
      description: [
        "Designed and implemented high availability and disaster recovery strategies using AWS Route 53, Auto Scaling, and Multi-AZ deployments, achieving consistent 99% system uptime.",
        "Migrated 10+ applications from on-prem to AWS (EC2, RDS, S3), optimizing resource provisioning and reducing infrastructure costs by 20%."
      ]
    },
    {
      role: "AWS DevOps Engineer",
      company: "PUFFERSOFT",
      location: "FAISALABAD",
      period: "Feb 2021 – April 2023",
      description: [
        "Orchestrated migration of 5 legacy enterprise systems to AWS, resulting in 30% operational cost reduction and 20% improvement in system reliability through cloud-native architecture.",
        "Enhanced web application security using AWS WAF rulesets and provisioned 50+ virtual desktops via AWS Workspaces for remote teams, improving security and remote productivity.",
        "Designed infrastructure cost-optimization and least-privilege IAM policies, establishing centralized compliance controls and reducing cloud spend by 15%."
      ]
    },
    {
      role: "DevOps TRAINEE",
      company: "PUFFERSOFT",
      location: "FAISALABAD",
      period: "Oct 2020 – Feb 2021", // Corrected year based on logic
      description: [
        "Assisted in deploying ML workloads on GPU-enabled EC2 instances (P3), enabling model training acceleration by 2x.",
        "Configured AWS Amplify for deploying serverless web applications, enabling CI/CD and user authentication integration with Cognito."
      ]
    }
  ],
  projects: [
    {
      title: "Scalable Microservices Deployment on AWS EKS",
      description: "Led the migration of a suite of monolithic APIs and applications to a containerized microservices architecture on AWS EKS. Replaced manual scripts with GitOps workflows and integrated Helm chart templating for environment-specific configuration.",
      results: [
        "Reduced deployment time by 50% and enabled blue/green deployment strategies.",
        "Scaled the platform to handle 3x user traffic with zero downtime during release cycles.",
        "Implemented RBAC policies and network policies across namespaces for isolation."
      ],
      tools: ["AWS EKS", "GitHub Actions", "ArgoCD", "Helm", "Terraform", "Docker", "Kubernetes RBAC", "Karpenter"]
    },
    {
      title: "Cloud Migration from On-Prem to AWS Microservices Architecture",
      description: "Migrated a legacy PHP monolith and associated mobile backend APIs to AWS, using ECS Fargate and AWS RDS. Re-architected the system using event-driven microservices and decoupled storage.",
      results: [
        "Improved application performance by 30% through load-balanced services.",
        "Reduced infrastructure costs by 25% through on-demand auto-scaling and removal of idle capacity."
      ],
      tools: ["AWS ECS", "RDS", "Lambda", "S3", "API Gateway", "Step Functions", "CloudWatch", "SES", "SNS"]
    },
    {
      title: "Kubernetes Continuous Delivery on GCP with GKE, ArgoCD & Helm",
      description: "Designed and deployed multiple stateless and stateful applications on GKE. Used ArgoCD for GitOps-based deployment automation and Helm for dynamic chart management.",
      results: [
        "Reduced deployment errors by 40%.",
        "Enabled feature delivery cycles to shift from monthly to bi-weekly."
      ],
      tools: ["Google GKE", "Helm", "ArgoCD", "GitHub", "Artifact Registry", "Cloud Monitoring"]
    },
    {
      title: "Hybrid Cloud Disaster Recovery Between Azure & AWS",
      description: "Engineered a highly available hybrid DR architecture that leveraged AWS Route 53 failover and Azure Site Recovery to provide seamless failover between two cloud platforms.",
      results: [
        "Achieved 99.9% SLA uptime.",
        "Cut business downtime risk during outages by over 80%."
      ],
      tools: ["Azure Site Recovery", "AWS Route53", "VNet Peering", "DNS Failover", "S3 Cross-Region Replication", "Azure Monitor"]
    },
    {
      title: "Multi-Cloud CI/CD Automation (AWS, Azure, GCP)",
      description: "Built a platform-agnostic CI/CD pipeline that unified deployment workflows across multiple cloud providers. Created reusable pipeline modules for all services and environments.",
      results: [
        "Reduced release cycle times by 60%.",
        "Created consistency in pipeline governance and rollback strategies."
      ],
      tools: ["GitLab CI", "Jenkins", "Terraform", "GitHub Actions", "Docker", "CloudFormation", "Azure DevOps"]
    },
    {
      title: "Enterprise Kubernetes Infrastructure for Multi-Region AWS Deployment",
      description: "Designed and deployed a global, fault-tolerant Kubernetes platform using EKS across multiple AWS regions. Integrated external-dns, cert-manager, and cross-region secrets management.",
      results: [
        "Achieved zero-downtime deployments globally.",
        "Improved latency and failover response through traffic splitting and geo-DNS routing."
      ],
      tools: ["AWS EKS", "Karpenter", "Helm", "ArgoCD", "External-DNS", "AWS Secrets Manager", "Route53 GeoDNS"]
    },
    {
      title: "GitOps Platform Design for Enterprise Infrastructure",
      description: "Architected a scalable GitOps-based infrastructure management platform for managing multiple Kubernetes clusters. Used ArgoCD for application reconciliation and Helmfile for templated configuration of services across environments.",
      results: [
        "Reduced drift-related outages by 90%.",
        "Enabled full infra reproducibility from codebase within minutes."
      ],
      tools: ["ArgoCD", "Helmfile", "GitHub", "Terraform Cloud", "External Secret Operator", "AWS Secret Manager", "Kubernetes", "EKS"]
    },
    {
      title: "Policy-as-Code Security Pipeline",
      description: "Built a centralized security enforcement layer using OPA + Conftest, embedded into CI pipelines. Validated Kubernetes manifests, Terraform code, and Dockerfiles against security rules before deployment.",
      results: [
        "Blocked 100% of misconfigured deployments before they reached production.",
        "Improved security posture auditability across all teams."
      ],
      tools: ["Open Policy Agent (OPA)", "Conftest", "Terraform", "Kubernetes Admission Controller", "GitHub Actions", "AWS Config"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "The University Of Faisalabad",
      period: "September 2017 – October 2021",
      gpa: "3.59/4.0"
    }
  ],
  certifications: [
    "Certified Kubernetes Administrator (CKA), Kodacloud",
    "AWS DevOps Engineer Professional DO-C02",
    "AWS Certified Developer Associate, AWS, Udemy",
    "DevOps Zero to Hero, YouTube",
    "Azure Administrator AZ 104, Udemy, Kodacloud",
    "Professional Cloud Architect, GCP",
    "AWS Cloud Practitioner, AWS"
  ]
};
