# Configs
TERRAFORM_BIN = /usr/bin/terraform
CURRENT_ENV = ${TERRAFORM_ENV}

BUCKET = ${TF_VAR_BUCKET_NAME}

# Commands
.DEFAULT_GOAL := help
help: 
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n",	$$1, $$2}'

install:  ## Install Application Dependences
	npm install

build:  ## Build Application source code
	npm run build

deploy:  build ## Build and Deploy  
	aws s3 sync $(APP_DIST) s3://$(BUCKET)

check: clean validate ## Validate syntax and format

clean: ## Format terraform configurations
	cd $(TF_DIRECTORY);	$(TERRAFORM_BIN) fmt -list

validate: ## validate terraform configs
	cd $(TF_DIRECTORY); $(TERRAFORM_BIN) validate

publish: check ## Check local terraform state and validate terraform configs 
	cd $(TF_DIRECTORY); $(TERRAFORM_BIN) apply
	$(MAKE) deploy

purge: ## Teardown applied terraform configurations
	cd $(TF_DIRECTORY); $(TERRAFORM_BIN) destroy
