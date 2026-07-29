## TODO APP - Docker & Kubernetes

### Run it
<pre>
kind create cluster --name todo-platform

cd todo-app-docker-k8s

kubectl apply -f k8s/namespace.yaml
kubectl apply -n todo-app -f k8s/

docker build -t todo-backend:v1 ./backend
docker build -t todo-frontend:v1 ./frontend

kind load docker-image todo-backend:v1 --name todo-platform
kind load docker-image todo-frontend:v1 --name todo-platform

kubectl apply -f k8s/postgres-secret.yaml
kubectl apply -f k8s/backend-secret.yaml

kubectl apply -f k8s/postgres-pvc.yaml

kubectl apply -f k8s/postgres-statefulset.yaml
kubectl apply -f k8s/postgres-service.yaml

kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml

kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml

kubectl apply -f k8s/ingress.yaml
</pre>

Go to [http://localhost:8080](http://localhost:8080)
