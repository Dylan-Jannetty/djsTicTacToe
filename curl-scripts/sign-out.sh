# ID=2 sh curl-scripts/sign-out.sh

curl "http://tic-tac-toe.wdibos.com/sign-out/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --header "Authorization: Token token=${TOKEN}"

echo
