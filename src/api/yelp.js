import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer tE8FdxfQYIS-9wFI-SHXUrobA4DYN3to5fK4CbIUc5Nw4dhctApxi0d9WmKBya3pkL2gPbpZegwzGXmMKOVpUXZnHW99awyjScp09KMm1gIl0S4dLeH1gRMy_w6_XnYx",
  },
});
