## TODO APP - Docker & Kubernetes

### Run it

Add this line to hosts file
<pre>
127.0.0.1 todo.local
</pre>

<pre>
kind create cluster --name todo-platform --config kind-config.yaml

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

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
</pre>

Wait until ingress-nginx-controller status becomes Running
<pre>
kubectl get pods -n ingress-nginx
</pre>

<pre>
kubectl apply -f k8s/ingress.yaml
</pre>

Go to [http://todo.local](http://todo.local)
